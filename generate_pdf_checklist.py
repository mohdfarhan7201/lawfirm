import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Nirmala UI for Hindi & English support
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
        
        # Header on page > 1
        if self._pageNumber > 1:
            self.drawString(36, 806, "ADV. ARMAN ASHRAFI — Website Data Replacement Checklist")
            self.drawRightString(559, 806, "October 2026")
            self.setStrokeColor(colors.HexColor("#D8CFC4"))
            self.setLineWidth(0.5)
            self.line(36, 800, 559, 800)
            
        # Footer
        self.setStrokeColor(colors.HexColor("#D8CFC4"))
        self.setLineWidth(0.5)
        self.line(36, 38, 559, 38)
        self.drawString(36, 26, "Official Legal Firm Portfolio Audit Document | Saran at Chapra, Bihar")
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(559, 26, page_str)
        self.restoreState()

def build_pdf():
    pdf_filename = "Dummy_Data_Replacement_Checklist.pdf"
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=46
    )

    # Palette
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

    # Custom styles with Nirmala font
    title_style = ParagraphStyle(
        'DocTitle',
        fontName='NirmalaB',
        fontSize=18,
        leading=22,
        textColor=c_espresso
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        fontName='NirmalaB',
        fontSize=10,
        leading=14,
        textColor=c_gold
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

    body_style = ParagraphStyle(
        'BodyDev',
        fontName='Nirmala',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#3D312A")
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

    cell_sub = ParagraphStyle(
        'CellSub',
        fontName='Nirmala',
        fontSize=7.5,
        leading=9.5,
        textColor=c_muted
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

    # 1. Top Header
    header_data = [
        [
            Paragraph("<b>ADV. ARMAN ASHRAFI</b><br/><font color='#9C7348'>Assistant Legal Aid Defense Counsel (LADCS) | DLSA Saran (Chapra)</font>", title_style),
            Paragraph("<b>WEBSITE DATA AUDIT & ACTION CHECKLIST</b><br/>Status: <b>Ready for Real Data Input</b><br/>Date: October 2026 | Format: PDF", meta_style)
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
        "<b>📋 यह चेकलिस्ट किसलिए है? (Purpose of this Checklist):</b><br/>"
        "वेबसाइट में <b>Adv. Arman Ashrafi</b> का मुख्य नाम, फोटो गैलरी (14 असली तस्वीरें), बाइज्जत बरी केस (Sec 498A) और DLSA/BSLSA का आधिकारिक विवरण पहले ही लाइव कर दिया गया है। "
        "नीचे उन <b>बाकी बचे डमी/सैंपल डेटा (Dummy & Placeholder Data)</b> की पूरी सूची दी गई है, जिन्हें आपको अपने वास्तविक (Real) डेटा से बदलना है। "
        "आप इस लिस्ट में जो भी जानकारी चैट में बता देंगे, वह तुरंत कोड में रिप्लेस होकर वेबसाइट पर लाइव अपडेट हो जाएगी।"
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

    # Helper function to create stylish tables
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

    # SECTION 1: Contact & Chamber
    story.append(Paragraph("<b>1. संपर्क और चैंबर का विवरण (Contact & Chamber Details)</b>", sec_title_style))
    sec1_data = [
        [
            Paragraph("फ़ील्ड का नाम (Field)", th_style),
            Paragraph("वर्तमान डमी डेटा (Current Dummy)", th_style),
            Paragraph("आपका असली डेटा (Your Real Data to Fill)", th_style)
        ],
        [
            Paragraph("<b>मोबाइल / WhatsApp नंबर</b><br/><font color='#7E6C5F'>lib/content.ts (phone)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>+91 98765 43210</b></font><br/><i>[Dummy Placeholder]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(कॉलिंग व WhatsApp नंबर)</i>", cell_fill)
        ],
        [
            Paragraph("<b>आधिकारिक ईमेल एड्रेस</b><br/><font color='#7E6C5F'>lib/content.ts (email)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>arman.ashrafi@email.com</b></font><br/><i>[Sample Email]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(चालू Gmail या व्यावसायिक ईमेल)</i>", cell_fill)
        ],
        [
            Paragraph("<b>चैंबर / ऑफिस का सटीक पता</b><br/><font color='#7E6C5F'>lib/content.ts (courtChambers)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Civil Court Complex, Saran at Chapra, Bihar - 841301</font><br/><i>[General Area Only]</i>", cell_dummy),
            Paragraph("☐ चैंबर / टेबल / केबिन नंबर:<br/>___________________________", cell_fill)
        ],
        [
            Paragraph("<b>परामर्श समय (Consultation Hours)</b><br/><font color='#7E6C5F'>lib/content.ts (officeHours)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Mon to Sat: 10:00 AM – 6:30 PM</font><br/><i>[Sample Working Hours]</i>", cell_dummy),
            Paragraph("☐ ___________________________<br/><i>(यदि कोई विशेष समय तय हो)</i>", cell_fill)
        ]
    ]
    story.append(make_table(sec1_data))
    story.append(Spacer(1, 8))

    # SECTION 2: Bar & Professional Credentials
    story.append(Paragraph("<b>2. बार काउंसिल व वकालत क्रेडेंशियल (Bar & Legal Credentials)</b>", sec_title_style))
    sec2_data = [
        [
            Paragraph("फ़ील्ड का नाम (Field)", th_style),
            Paragraph("वर्तमान डमी डेटा (Current Dummy)", th_style),
            Paragraph("आपका असली डेटा (Your Real Data to Fill)", th_style)
        ],
        [
            Paragraph("<b>बार काउंसिल एनरोलमेंट नंबर</b><br/><font color='#7E6C5F'>lib/content.ts (registrationNumber)</font>", cell_field),
            Paragraph("<font color='#B23B2A'><b>BR/XXXX/XXXX</b></font><br/><i>[Placeholder Masked]</i>", cell_dummy),
            Paragraph("☐ BR/_____/_____<br/><i>(Bar Council of Bihar रजिस्ट्रेशन)</i>", cell_fill)
        ],
        [
            Paragraph("<b>वकालत अनुभव वर्ष (Experience)</b><br/><font color='#7E6C5F'>lib/content.ts (experienceYears)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>6+ Years (Active Practice)</font><br/><i>[Estimated Approx]</i>", cell_dummy),
            Paragraph("☐ वकालत शुरू करने का साल: ______<br/><i>(उदा. 2017, 2018 आदि)</i>", cell_fill)
        ],
        [
            Paragraph("<b>हैंडल किए गए मुकदमों की संख्या</b><br/><font color='#7E6C5F'>lib/content.ts (stats.casesHandled)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>250+ Cases & Hearings</font><br/><i>[Estimated Approx]</i>", cell_dummy),
            Paragraph("☐ वेबसाइट पर क्या संख्या दिखाएं:<br/><i>(उदा. 300+, 500+ आदि)</i>", cell_fill)
        ]
    ]
    story.append(make_table(sec2_data))
    story.append(Spacer(1, 8))

    # SECTION 3: Education Details
    story.append(Paragraph("<b>3. शैक्षणिक योग्यता (Education & Academic Background)</b>", sec_title_style))
    sec3_data = [
        [
            Paragraph("फ़ील्ड का नाम (Field)", th_style),
            Paragraph("वर्तमान डमी डेटा (Current Dummy)", th_style),
            Paragraph("आपका असली डेटा (Your Real Data to Fill)", th_style)
        ],
        [
            Paragraph("<b>LL.B. कॉलेज व यूनिवर्सिटी</b><br/><font color='#7E6C5F'>lib/content.ts (education[0])</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Renowned University / Faculty of Law (2018)</font><br/><i>[Placeholder Name]</i>", cell_dummy),
            Paragraph("☐ कॉलेज/यूनिवर्सिटी: ________________<br/>उत्तीर्ण वर्ष (Year): ________", cell_fill)
        ],
        [
            Paragraph("<b>ग्रेजुएशन (B.A. / B.Sc आदि)</b><br/><font color='#7E6C5F'>lib/content.ts (education[1])</font>", cell_field),
            Paragraph("<font color='#B23B2A'>University of Excellence (2015)</font><br/><i>[Placeholder Name]</i>", cell_dummy),
            Paragraph("☐ डिग्री व कॉलेज: ________________<br/>उत्तीर्ण वर्ष (Year): ________", cell_fill)
        ]
    ]
    story.append(make_table(sec3_data))

    # Page Break to Page 2
    story.append(PageBreak())
    story.append(Spacer(1, 10))

    # SECTION 4: Social Media & Online Profiles
    story.append(Paragraph("<b>4. सोशल मीडिया व ऑनलाइन प्रोफाइल्स (Social Media & Maps)</b>", sec_title_style))
    sec4_data = [
        [
            Paragraph("फ़ील्ड का नाम (Field)", th_style),
            Paragraph("वर्तमान डमी डेटा (Current Dummy)", th_style),
            Paragraph("आपका असली डेटा (Your Real Data to Fill)", th_style)
        ],
        [
            Paragraph("<b>LinkedIn प्रोफाइल URL</b><br/><font color='#7E6C5F'>lib/content.ts (social.linkedin)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>https://www.linkedin.com/in/</font><br/><i>[Empty Generic Handle]</i>", cell_dummy),
            Paragraph("☐ प्रोफाइल लिंक दें या बताएं:<br/>( ) लिंक जोड़ें  ( ) हटा दें", cell_fill)
        ],
        [
            Paragraph("<b>Twitter / X / Facebook</b><br/><font color='#7E6C5F'>lib/content.ts (social.twitter)</font>", cell_field),
            Paragraph("<font color='#B23B2A'>https://twitter.com/</font><br/><i>[Empty Generic Handle]</i>", cell_dummy),
            Paragraph("☐ फेसबुक पेज या X हैंडल लिंक दें:<br/>( ) लिंक जोड़ें  ( ) हटा दें", cell_fill)
        ],
        [
            Paragraph("<b>Google Maps चैंबर लोकेशन</b><br/><font color='#7E6C5F'>components/ContactForm.tsx</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Chhapra Civil Court (Approximate Pin)</font><br/><i>[Generic Location]</i>", cell_dummy),
            Paragraph("☐ Google Maps पर चैंबर का लिंक:<br/>___________________________", cell_fill)
        ]
    ]
    story.append(make_table(sec4_data))
    story.append(Spacer(1, 8))

    # SECTION 5: Form Inbox & Domain
    story.append(Paragraph("<b>5. कॉन्टैक्ट फॉर्म ईमेल डिलीवरी व डोमेन (Form Inbox & Domain Setup)</b>", sec_title_style))
    sec5_data = [
        [
            Paragraph("फ़ील्ड का नाम (Field)", th_style),
            Paragraph("वर्तमान स्थिति (Current State)", th_style),
            Paragraph("आवश्यक निर्णय (Decision Needed)", th_style)
        ],
        [
            Paragraph("<b>क्लाइंट इंक्वायरी ईमेल डिलीवरी</b><br/><font color='#7E6C5F'>app/api/contact/route.ts</font>", cell_field),
            Paragraph("<font color='#B23B2A'>Simulated / Console Log Mode</font><br/><i>[ईमेल सर्विस अभी कनेक्ट नहीं है]</i>", cell_dummy),
            Paragraph("☐ वेबसाइट के संपर्क फॉर्म से आने वाले संदेश किस ईमेल पर रिसीव करना चाहते हैं?<br/>Email: _____________________", cell_fill)
        ],
        [
            Paragraph("<b>कस्टम डोमेन (Custom Domain)</b><br/><font color='#7E6C5F'>Vercel Production Deployment</font>", cell_field),
            Paragraph("<font color='#2E7D32'><b>lawfirm-jade.vercel.app</b></font><br/><i>[Vercel पर लाइव है]</i>", cell_success),
            Paragraph("☐ क्या आप अपना खुद का डोमेन जोड़ना चाहते हैं?<br/>(जैसे www.advarmanashrafi.in / .com)", cell_fill)
        ]
    ]
    story.append(make_table(sec5_data))
    story.append(Spacer(1, 8))

    # SECTION 6: Already Live Real Data
    story.append(Paragraph("<b>6. जो रियल डेटा पहले ही लाइव हो चुका है (Already Live on Website)</b>", sec_title_style))
    sec6_data = [
        [
            Paragraph("मद (Feature)", th_style),
            Paragraph("वेबसाइट पर लाइव विवरण (Live Details)", th_style),
            Paragraph("स्थिति (Status)", th_style)
        ],
        [
            Paragraph("<b>अधिवक्ता का नाम</b>", cell_field),
            Paragraph("<b>Adv. Arman Ashrafi</b> (अधिवक्ता अरमान अशरफी)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>आधिकारिक पद / डेसिग्नेशन</b>", cell_field),
            Paragraph("Assistant Legal Aid Defense Counsel (LADCS), DLSA Saran at Chapra, Bihar", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>अधिवक्ता की असली तस्वीरें</b>", cell_field),
            Paragraph("HD Studio Portrait & High Court Robes / Gown (lawyer.jpg & gallery)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>फोटो गैलरी पेज (/gallery)</b>", cell_field),
            Paragraph("14 HD Photos (Robes, BSLSA Summit, Cuttings, Felicitations) + Lightbox", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>ऐतिहासिक केस विजय</b>", cell_field),
            Paragraph("दहेज प्रताड़ना (Sec 498A) केस में बाइज्जत बरी (Hey Chapra & Shubh Bhaskar)", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ],
        [
            Paragraph("<b>BSLSA पटना सम्मान</b>", cell_field),
            Paragraph("Member Secretary श्रीमती शिल्पी सोनीराज द्वारा प्रदान किया गया प्रशस्ति पत्र", cell_field),
            Paragraph("<font color='#2E7D32'><b>✅ Live (100% Real)</b></font>", cell_success)
        ]
    ]
    story.append(make_table(sec6_data, col_widths=[130, 260, 133]))
    story.append(Spacer(1, 10))

    # Bottom Instructions Callout Box
    callout_text = (
        "<b>📌 अगला कदम — रियल डेटा कैसे अपडेट करवाएं? (Next Action Step):</b><br/>"
        "ऊपर दी गई लिस्ट में से जो भी जानकारी आपके पास तैयार है (जैसे असली फोन नंबर, ईमेल एड्रेस, बार काउंसिल एनरोलमेंट नंबर, या कॉलेज का नाम), "
        "आप बस इस चैट में लिखकर भेज दीजिए। हम तुरंत उसे कोड में रिप्लेस कर देंगे और Vercel पर लाइव पब्लिश कर देंगे!"
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
    print(f"PDF successfully generated: {pdf_filename}")

if __name__ == "__main__":
    build_pdf()
