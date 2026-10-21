  import { sendEmail } from '@/lib/email';
  import { prisma } from '@/lib/prismaDB';
  import crypto from 'crypto';
  import { NextResponse } from 'next/server';

  export async function POST(request: Request) {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new NextResponse('Brakujace Pola', { status: 400 });
    }

    const formatedEmail = email.toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: formatedEmail,
      },
    });

    if (!user) {
      return new NextResponse('Użytkownik nie istnieje, { status: 400 }');
    }

    const resetToken = crypto.randomBytes(20).toString('hex');

    const passwordResetTokenExp = new Date();
    passwordResetTokenExp.setMinutes(passwordResetTokenExp.getMinutes() + 10);

    await prisma.user.update({
      where: {
        email: formatedEmail,
      },
      data: {
        passwordResetToken: resetToken,
        passwordResetTokenExp,
      },
    });

    const resetURL = `${process.env.SITE_URL}/reset-password/${resetToken}`;

    try {
      await sendEmail({
        to: formatedEmail,
        subject: 'Zrestartuj swoje hasło',
        html: ` 
<div>
          <h1>Poproszono o zresetowanie hasła</h1>
          <p>Kliknij poniższy link, aby zresetować swoje hasło:</p>
          <a href="${resetURL}" target="_blank">Zresetuj hasło</a>
        </div>
        `,
      });

      return NextResponse.json('Wiadomość e-mail została wysłana na Twój adres.', {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json('Wystąpił błąd. Proszę spróbować ponownie!', {
        status: 500,
      });
    }
  }
