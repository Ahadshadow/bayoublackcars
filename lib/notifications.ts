import { Resend } from 'resend';
import { jsPDF } from 'jspdf';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build_only');

export async function sendBookingConfirmationEmail(bookingData: any) {
    if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is missing. Email will not be sent.');
        return;
    }

    try {
        await resend.emails.send({
            from: 'Bayou Black Cars <info@bayoublackcars.com>',
            to: bookingData.customerEmail,
            subject: 'Luxury Journey Confirmed - Bayou Black Cars Excellence',
            html: `
                <div style="font-family: 'Poppins', sans-serif; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #f0f0f0; border-radius: 20px;">
                    <h2 style="color: #002B5B; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">Reservation Confirmed</h2>
                    <p>Dear ${bookingData.customerName},</p>
                    <p>Your elite transportation is scheduled and confirmed. We look forward to providing you with a superior travel experience.</p>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 12px; margin: 20px 0;">
                        <p><strong>Pickup:</strong> ${bookingData.pickup}</p>
                        ${bookingData.mode === 'distance' ? `<p><strong>Dropoff:</strong> ${bookingData.dropoff}</p>` : `<p><strong>Duration:</strong> ${bookingData.hours} Hours</p>`}
                        <p><strong>Date & Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
                        <p><strong>Vehicle:</strong> ${bookingData.vehicleName}</p>
                        <p><strong>Total Fare:</strong> $${bookingData.price}</p>
                    </div>

                    <p style="font-size: 12px; color: #999;">If you need to make changes, please contact our 24/7 support at (504) 508-4831.</p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Email Error:', error);
    }
}

export function generateBookingPDF(bookingData: any) {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(0, 43, 91); // #002B5B Navy primary
    doc.text('Bayou Black Cars Excellence', 20, 30);

    doc.setFontSize(10);
    doc.setTextColor(197, 160, 89); // #c5a059 Gold accent
    doc.text('OFFICIAL BOOKING RECEIPT', 20, 40);

    // Body
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Customer: ${bookingData.customerName}`, 20, 60);
    doc.text(`Phone: ${bookingData.customerPhone}`, 20, 70);
    doc.text(`Email: ${bookingData.customerEmail}`, 20, 80);

    doc.setDrawColor(200, 200, 200);
    doc.line(20, 90, 190, 90);

    doc.text(`Vehicle: ${bookingData.vehicleName}`, 20, 105);
    doc.text(`Pickup: ${bookingData.pickup}`, 20, 115);
    if (bookingData.mode === 'distance') {
        doc.text(`Dropoff: ${bookingData.dropoff}`, 20, 125);
    } else {
        doc.text(`Duration: ${bookingData.hours} Hours`, 20, 125);
    }
    doc.text(`Date/Time: ${bookingData.date} at ${bookingData.time}`, 20, 135);

    doc.setDrawColor(0, 43, 91);
    doc.setFillColor(245, 245, 245);
    doc.rect(20, 150, 170, 20, 'F');
    doc.text(`TOTAL FARE PAID: $${bookingData.price}`, 30, 163);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Thank you for choosing Bayou Black Cars. Professional, reliable, and luxury transportation.', 20, 280);

    return doc;
}
