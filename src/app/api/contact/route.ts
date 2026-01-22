import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Requête invalide.' },
      { status: 400 },
    );
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Format de données non pris en charge.' },
      { status: 400 },
    );
  }

  const { companyName, contactName, email, phone, subject, message, date } = data as {
    companyName?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    date?: string;
  };

  if (!companyName || !contactName || !email || !phone) {
    return NextResponse.json(
      { success: false, message: 'Certains champs obligatoires sont manquants.' },
      { status: 400 },
    );
  }

  // À ce stade, les données peuvent être transmises à un outil de CRM, de ticketing ou à un service d'e-mail.
  // Dans cette version, nous nous limitons à accuser réception côté serveur.
  console.info('[contact] Nouvelle demande reçue', {
    companyName,
    contactName,
    email,
    phone,
    subject,
    date,
    hasMessage: Boolean(message && message.trim()),
  });

  return NextResponse.json({ success: true });
}