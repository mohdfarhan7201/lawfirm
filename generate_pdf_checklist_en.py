import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Nirmala UI or standard fonts
pdfmetrics.registerFont(TTFont('Nirmala', r'C:\Windows\Fonts\Nirmala.ttf'))
pdfmetrics.registerFont(TTFont('NirmalaB', r'C:\Windows\Fonts\NirmalaB.ttf'))

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Nirmala", 8)
        self.setFillColor(colors.HexColor("#7E6C5F"))
        
        # Running header on page > 1
        if self._pageNumber > 1:
            self.drawString(36, 806, "ADV. ARMAN ASHRAFI — Website Data Replacement Checklist (English)")
            self.drawRightString(559, 806, "October 2026")
            self.setStrokeColor(colors.HexColor("#D8CFC4"))
            self.setLineWidth(0.5)
            self.line(36, 800, 559, 800)
            
        # Running footer
        self.setStrokeColor(colors.HexColor("#D8CFC4"))
        self.setLineWidth(0.5)
        self.line(36, 38, 559, 38)
        self.drawString(36, 26, "Official Legal Firm Portfolio Audit Document | Saran at Chapra, Bihar")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(559, 26, page_str)
        self.restoreState()

def build_pdf_en():
    pdf_filename = "Dummy_Data_Replacement_Checklist_EN.pdf"
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=46
    )

    # Color Palette
    c_espresso = colors.HexColor("#2A1E17")
    c_gold = colors.HexColor("#9C7348")
    c_sand = colors.HexColor("#FAF8F5")
    c_card = colors.HexColor("#FFFFFF")
    c_border = colors.HexColor("#E3DACD")
    c_header_bg = colors.HexColor("#EFE9E0")
    c_dummy_bg = colors.HexColor("#FDF2F0")
    c_dummy_text = colors.HexColor("#B23B2A")
    c_success_text = colors.HexColor("#2E7D32")
    c_muted = colors.HexColor("#6E5D4F")

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        fontName='NirmalaB',
        fontSize=18,
        leading=22,
        textColor=c_espresso
    )

    meta_style = ParagraphStyle(
        'DocMeta',
        fontName='Nirmala',
        fontSize=8.5,
        leading=12,
        textColor=c_muted,
        alignment=2 # Right
    )

    sec_title_style = ParagraphStyle(
        'SectionTitle',
        fontName='NirmalaB',
        fontSize=11.5,
        leading=16,
        textColor=c_espresso,
        spaceBefore=10,
        spaceAfter=6
    )

    notice_style = ParagraphStyle(
        'NoticeText',
        fontName='Nirmala',
        fontSize=8.5,
        leading=12.5,
        textColor=c_espresso
    )

    th_style = ParagraphStyle(
        'TH',
        fontName='NirmalaB',
        fontSize=8.5,
        leading=11,
        textColor=c_espresso
    )

    cell_field = ParagraphStyle(
        'CellField',
        fontName='NirmalaB',
        fontSize=8.5,
        leading=11.5,
        textColor=c_espresso
    )

    cell_dummy = ParagraphStyle(
        'CellDummy',
        fontName='NirmalaB',
        fontSize=8,
        leading=11,
        textColor=c_dummy_text
    )

    cell_fill = ParagraphStyle(
        'CellFill',
        fontName='Nirmala',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#555555")
    )

    cell_success = ParagraphStyle(
        'CellSuccess',
        fontName='NirmalaB',
        fontSize=8,
        leading=11,
        textColor=c_success_text
    )

    story = []

    # 1. Header
    header_data = [
        [
            Paragraph("<b>ADV. ARMAN ASHRAFI</b><br/><font color='#9C7348'>Assistant Legal Aid Defense Counsel (LADCS) | DLSA Saran at Chapra, Bihar</font>", title_style),
            Paragraph("<b>WEBSITE DATA AUDIT & ACTION CHECKLIST</b><br/>Edition: <b>English Version</b><br/>Status: <b>Ready for Real Data Input</b><br/>Date: October 2026", meta_style)
        ]
    ]
    t_header = Table(header_data, colWidths=[330, 193])
    t_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_header)
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_gold, spaceBefore=6, spaceAfter=8))

    # Notice Box
    notice_text = (
        "<b>📋 Purpose of this Checklist:</b><br/>"
        "The digital portfolio for <b>Adv. Arman Ashrafi</b> has been successfully updated with his authentic name, executive robes portrait, "
        "a full 14-photo media gallery, and press coverage of his landmark acquittal in Trial Case 4197/26 (Sec 498A IPC). "
        "Below is an itemized audit of all <b>remaining dummy / placeholder entries</b> that should be populated with verified real information. "
        "Simply share the corresponding details in chat or write them down, and they will be immediately updated on the live website."
    )
    t_notice = Table([[Paragraph(notice_text, notice_style)]], colWidths=[523])
    t_notice.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#FAF5ED")),
        ('BOX', (0,0), (-1,-1), 1, c_border),
        ('LINELEFT', (0,0), (-1,-1), 3.5, c_gold),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t_notice)
    story.append(Spacer(1, 10))

    def make_table(data_rows, col_widths=[145, 175, 203]):
        t = Table(data_rows, colWidths=col_widths)
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), c_header_bg),
            ('ALIGN', (0,0), (-1,-1), 'LEFT'),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING', (0,0), (-1,-1), 6),
            ('GRID', (0,0), (-1,-1), 0.5, c_border),
            ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#FCFBF9")]),
        ]))
        return t

    # SECTION 1: Contact & Chamber Details
    story.append(Paragraph("<b>1. Contact & Chamber Information</b>", sec_title_style))
    sec1_data = [
        [
            Paragraph("Field Name & Path", th_style),
            Paragraph("Current Dummy / Placeholder Value", th_style),
            Paragraph("Real Information to Populate", th_style)
        ],
        [
            Paragraph("<b>Mobile & WhatsApp Number</b><br/><font color='#7E6C5F'>lib/content.ts (phone)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>+91 98765 43210</b></font><br/><i>[Dummy Placeholder]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(Direct calling & WhatsApp consultation number)</i>", cell_fill)
        ],
        [
            Paragraph("<b>Official Chamber Email</b><br/><font color='#7E6C5F'>lib/content.ts (email)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>arman.ashrafi@email.com</b></font><br/><i>[Sample Email]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(Active Gmail or professional email address)</i>", cell_fill)
        ],
        [
            Paragraph("<b>Chamber / Cabin Exact Address</b><br/><font color='#7E6C5F'>lib/content.ts (courtChambers)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Civil Court Complex, Saran at Chapra, Bihar - 841301</font><br/><i>[General Complex Only]</i>", cell_dummy),
            Paragraph("☐ Chamber / Cabin / Table Number:<br/>___________________________", cell_fill)
        ],
        [
            Paragraph("<b>Consultation Hours & Schedule</b><br/><font color='#7E6C5F'>lib/content.ts (officeHours)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Mon to Sat: 10:00 AM – 6:30 PM</font><br/><i>[Sample Working Hours]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(Preferred in-person consultation hours)</i>", cell_fill)
        ]
    ]
    story.append(make_table(sec1_data))
    story.append(Spacer(1, 8))

    # SECTION 2: Bar & Professional Credentials
    story.append(Paragraph("<b>2. Bar Council & Professional Standing</b>", sec_title_style))
    sec2_data = [
        [
            Paragraph("Field Name & Path", th_style),
            Paragraph("Current Dummy / Placeholder Value", th_style),
            Paragraph("Real Information to Populate", th_style)
        ],
        [
            Paragraph("<b>Bar Council Enrollment No.</b><br/><font color='#7E6C5F'>lib/content.ts (registrationNumber)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>BR/XXXX/XXXX</b></font><br/><i>[Masked Placeholder]</i>", cell_dummy),
            Paragraph("☐ BR/_____/_____<br/><i>(Bar Council of Bihar Enrollment Number)</i>", cell_fill)
        ],
        [
            Paragraph("<b>Years of Active Practice</b><br/><font color='#7E6C5F'>lib/content.ts (experienceYears)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>6+ Years (Active Practice)</font><br/><i>[Estimated Approx]</i>", cell_dummy),
            Paragraph("☐ Year Enrolled / Commenced Practice: _____<br/><i>(e.g., 2017, 2018, etc.)</i>", cell_fill)
        ],
        [
            Paragraph("<b>Court Cases & Hearings Handled</b><br/><font color='#7E6C5F'>lib/content.ts (stats.casesHandled)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>250+ Cases & Hearings</font><br/><i>[Estimated Approx]</i>", cell_dummy),
            Paragraph("☐ Target Number to Highlight on Site:<br/><i>(e.g., 300+, 500+, etc.)</i>", cell_fill)
        ]
    ]
    story.append(make_table(sec2_data))
    story.append(Spacer(1, 8))

    # SECTION 3: Education & Academic Background
    story.append(Paragraph("<b>3. Educational & Academic Background</b>", sec_title_style))
    sec3_data = [
        [
            Paragraph("Field Name & Path", th_style),
            Paragraph("Current Dummy / Placeholder Value", th_style),
            Paragraph("Real Information to Populate", th_style)
        ],
        [
            Paragraph("<b>LL.B. Law Faculty / University</b><br/><font color='#7E6C5F'>lib/content.ts (education[0])</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Renowned University / Faculty of Law (2018)</font><br/><i>[Placeholder Name]</i>", cell_dummy),
            Paragraph("☐ Law College / University Name: ____________<br/>Passing Year: ________", cell_fill)
        ],
        [
            Paragraph("<b>Undergraduate Degree (B.A./B.Sc)</b><br/><font color='#7E6C5F'>lib/content.ts (education[1])</font>", cell_field),
            Paragraph("<font color='#B23B2A'>University of Excellence (2015)</font><br/><i>[Placeholder Name]</i>", cell_dummy),
            Paragraph("☐ Degree & University Name: _______________<br/>Passing Year: ________", cell_fill)
        ]
    ]
    story.append(make_table(sec3_data))

    # Page Break
    story.append(PageBreak())
    story.append(Spacer(1, 10))

    # SECTION 4: Social Media & Online Profiles
    story.append(Paragraph("<b>4. Social Media & Online Directory Profiles</b>", sec_title_style))
    sec4_data = [
        [
            Paragraph("Field Name & Path", th_style),
            Paragraph("Current Dummy / Placeholder Value", th_style),
            Paragraph("Real Information to Populate", th_style)
        ],
        [
            Paragraph("<b>LinkedIn Profile URL</b><br/><font color='#7E6C5F'>lib/content.ts (social.linkedin)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>https://www.linkedin.com/in/</font><br/><i>[Generic Empty URL]</i>", cell_dummy),
            Paragraph("☐ Profile URL or Action:<br/>( ) Provide Link  ( ) Remove from Site", cell_fill)
        ],
        [
            Paragraph("<b>Twitter / X / Facebook Profile</b><br/><font color='#7E6C5F'>lib/content.ts (social.twitter)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>https://twitter.com/</font><br/><i>[Generic Empty URL]</i>", cell_dummy),
            Paragraph("☐ Facebook Page or X Handle:<br/>( ) Provide Link  ( ) Remove from Site", cell_fill)
        ],
        [
            Paragraph("<b>Google Maps Chamber Pin</b><br/><font color='#7E6C5F'>components/ContactForm.tsx</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Chhapra Civil Court (Approximate Pin)</font><br/><i>[Generic Coordinates]</i>", cell_dummy),
            Paragraph("☐ Google Maps Location Link:<br/>___________________________", cell_fill)
        ]
    ]
    story.append(make_table(sec4_data))
    story.append(Spacer(1, 8))

    # SECTION 5: Form Delivery & Custom Domain
    story.append(Paragraph("<b>5. Contact Form Inquiry Delivery & Domain Configuration</b>", sec_title_style))
    sec5_data = [
        [
            Paragraph("Field Name & Path", th_style),
            Paragraph("Current Implementation Status", th_style),
            Paragraph("Required Decision / Real Value", th_style)
        ],
        [
            Paragraph("<b>Client Inquiry Email Notification</b><br/><font color='#7E6C5F'>app/api/contact/route.ts</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Simulated / Console Log Mode</font><br/><i>[External mail dispatch not connected]</i>", cell_dummy),
            Paragraph("☐ Target email inbox to receive consultation requests submitted through the website:<br/>Email: _____________________", cell_fill)
        ],
        [
            Paragraph("<b>Custom Website Domain</b><br/><font color='#7E6C5F'>Vercel Production Deployment</font>", cell_field),
            Paragraph("<font color='#2E7D32'><b>lawfirm-jade.vercel.app</b></font><br/><i>[Live on Vercel]</i>", cell_success),
            Paragraph("☐ Would you like to connect a custom domain?<br/>(e.g., www.advarmanashrafi.in / .com)", cell_fill)
        ]
    ]
    story.append(make_table(sec5_data))
    story.append(Spacer(1, 8))

    # SECTION 6: Already Live Real Data
    story.append(Paragraph("<b>6. Authentic Real Data Already Deployed Live on Website</b>", sec_title_style))
    sec6_data = [
        [
            Paragraph("Attribute / Feature", th_style),
            Paragraph("Live Implementation Details", th_style),
            Paragraph("Status", th_style)
        ],
        [
            Paragraph("<b>Advocate Identity</b>", cell_field),
            Paragraph("<b>Adv. Arman Ashrafi</b> (अधिवक्ता अरमान अशरफी)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>Official Appointment</b>", cell_field),
            Paragraph("Assistant Legal Aid Defense Counsel (LADCS), DLSA Saran at Chapra, Bihar", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>Executive Photography</b>", cell_field),
            Paragraph("HD Studio Portrait & High Court Robes / Gown (lawyer.jpg & gallery)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>Dedicated Gallery Page</b>", cell_field),
            Paragraph("14 HD Photos (Robes, BSLSA Summit, News Cuttings, Felicitations) + Lightbox", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>Landmark Acquittal Record</b>", cell_field),
            Paragraph("Dowry Harassment trial (Chandan Kumar Singh acquitted — Hey Chapra / Shubh Bhaskar)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>BSLSA State Felicitation</b>", cell_field),
            Paragraph("Capacity Building Certificate presented by Member Secretary Ms. Shilpee Soniraj", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ]
    ]
    story.append(make_table(sec6_data, col_widths=[130, 260, 133]))
    story.append(Spacer(1, 10))

    # Bottom Instructions Callout Box
    callout_text = (
        "<b>📌 Next Action Step — How to Update Real Data:</b><br/>"
        "Whichever real values are readily available (such as phone number, official email address, Bar Council enrollment number, or college names), "
        "simply type and send them in the chat. We will update the code configuration immediately and redeploy to Vercel."
    )
    callout_white_style = ParagraphStyle(
        'CalloutWhite',
        fontName='Nirmala',
        fontSize=8.5,
        leading=12.5,
        textColor=colors.HexColor("#FAF8F5")
    )
    t_callout = Table([[Paragraph(callout_text, callout_white_style)]], colWidths=[523])
    t_callout.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), c_espresso),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#1A130E")),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t_callout)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"English PDF successfully generated: {pdf_filename}")

if __name__ == "__main__":
    build_pdf_en()
