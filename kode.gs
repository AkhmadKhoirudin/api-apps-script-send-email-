function doGet(e) {
    // Ambil parameter dari URL
    var emailClient = e.parameter.emailclient;

    // Jika parameter emailclient ada, kirim email
    if (emailClient) {
        sendEmail(emailClient);
        return ContentService.createTextOutput("Email berhasil dikirim ke: " + emailClient);
    } else {
        return ContentService.createTextOutput("Parameter 'emailclient' tidak ditemukan.");
    }
}

function sendEmail(emailClient) {
    var senderEmail = "akhmadwibu05@gmail.com"; // Ganti dengan email Anda
    var subject = "Pesan Otomatis";
    var message = "Halo, ini adalah pesan otomatis yang dikirim melalui URL parameter.";

    try {
        // Mengirim email menggunakan MailApp
        MailApp.sendEmail({
            to: emailClient, // Gunakan email client yang diterima dari URL
            subject: subject,
            body: message,
            from: senderEmail // Optional: Tentukan alamat pengirim (jika menggunakan domain pribadi)
        });

        Logger.log("Email berhasil dikirim ke: " + emailClient);
    } catch (error) {
        Logger.log("Error: " + error.toString());
    }
}
