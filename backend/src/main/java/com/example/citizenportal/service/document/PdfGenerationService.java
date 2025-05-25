package com.example.citizenportal.service.document;

import com.example.citizenportal.model.applications.CitizenApplication;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.time.format.DateTimeFormatter;

@Service
public class PdfGenerationService {

    public byte[] generateApplicationPdf(CitizenApplication application) throws DocumentException {
        Document document = new Document();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PdfWriter.getInstance(document, outputStream);

        document.open();

        // Add title
        Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18);
        Paragraph title = new Paragraph("Application Receipt", titleFont);
        title.setAlignment(Element.ALIGN_CENTER);
        title.setSpacingAfter(20f);
        document.add(title);

        // Add application details table
        PdfPTable table = new PdfPTable(2);
        table.setWidthPercentage(100);
        table.setSpacingBefore(10f);
        table.setSpacingAfter(10f);

        addTableHeader(table);
        addApplicationRows(table, application);

        document.add(table);
        document.close();

        return outputStream.toByteArray();
    }

    private void addTableHeader(PdfPTable table) {
        Font headerFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        Stream.of("Field", "Value").forEach(columnTitle -> {
            PdfPCell header = new PdfPCell();
            header.setBackgroundColor(BaseColor.LIGHT_GRAY);
            header.setBorderWidth(1);
            header.setPhrase(new Phrase(columnTitle, headerFont));
            table.addCell(header);
        });
    }

    private void addApplicationRows(PdfPTable table, CitizenApplication application) {
        Font contentFont = FontFactory.getFont(FontFactory.HELVETICA, 12);

        addRow(table, "Reference Number", "APP-" + application.getId(), contentFont);
        addRow(table, "Service Name", application.getService().getName(), contentFont);
        addRow(table, "Applicant", application.getUser().getUsername(), contentFont);
        addRow(table, "Submission Date", 
            application.getCreatedAt().format(DateTimeFormatter.ISO_LOCAL_DATE), contentFont);
        addRow(table, "Status", application.getStatus(), contentFont);
    }

    private void addRow(PdfPTable table, String field, String value, Font font) {
        table.addCell(createCell(field, font));
        table.addCell(createCell(value, font));
    }

    private PdfPCell createCell(String content, Font font) {
        PdfPCell cell = new PdfPCell(new Phrase(content, font));
        cell.setPadding(5);
        return cell;
    }
}