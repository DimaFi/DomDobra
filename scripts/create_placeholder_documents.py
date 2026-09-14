from pathlib import Path
from shutil import copy2

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public" / "documents"

pdfmetrics.registerFont(TTFont("Arial", "C:/Windows/Fonts/arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", "C:/Windows/Fonts/arialbd.ttf"))

DOCUMENTS = [
    {
        "file": "license-placeholder.pdf",
        "title": "Лицензия",
        "subtitle": "Документ, подтверждающий право на осуществление деятельности",
        "number": "ЛИЦЕНЗИЯ № 00-000000",
        "body": [
            "Настоящий файл является демонстрационной заглушкой. Здесь будет размещена действующая лицензия организации.",
            "В финальной версии документа будут указаны реквизиты, дата выдачи, срок действия и сведения об уполномоченном органе.",
        ],
    },
    {
        "file": "lease-agreement-placeholder.pdf",
        "title": "Договор аренды",
        "subtitle": "Документы на помещение пансионата",
        "number": "ДОГОВОР № 00/2026",
        "body": [
            "Демонстрационный файл для предварительного просмотра раздела документов.",
            "После подготовки материалов здесь будет размещён договор аренды или иной документ, подтверждающий право использования помещения.",
        ],
    },
    {
        "file": "price-list-placeholder.pdf",
        "title": "Прейскурант",
        "subtitle": "Стоимость проживания и дополнительных услуг",
        "number": "ДЕЙСТВУЕТ С 01.01.2026",
        "body": [
            "Стандарт — стоимость уточняется индивидуально.",
            "Комфорт — стоимость уточняется индивидуально.",
            "Премиум — стоимость уточняется индивидуально.",
        ],
    },
    {
        "file": "house-rules-placeholder.pdf",
        "title": "Правила проживания",
        "subtitle": "Общие условия и распорядок дома",
        "number": "РЕДАКЦИЯ 2026",
        "body": [
            "Уважительное отношение, спокойная домашняя атмосфера и внимание к привычкам каждого проживающего.",
            "Окончательные правила, распорядок дня и порядок посещений будут опубликованы после утверждения.",
        ],
    },
]


def create_document(document: dict[str, object]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    path = OUTPUT_DIR / str(document["file"])
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName="Arial-Bold",
        fontSize=28,
        leading=34,
        textColor=HexColor("#173E31"),
        alignment=TA_CENTER,
        spaceAfter=10 * mm,
    )
    subtitle = ParagraphStyle(
        "Subtitle",
        parent=styles["BodyText"],
        fontName="Arial",
        fontSize=12,
        leading=18,
        textColor=HexColor("#67736D"),
        alignment=TA_CENTER,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Arial",
        fontSize=11,
        leading=18,
        textColor=HexColor("#344A42"),
        spaceAfter=6 * mm,
    )
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        rightMargin=28 * mm,
        leftMargin=28 * mm,
        topMargin=28 * mm,
        bottomMargin=24 * mm,
        title=str(document["title"]),
        author="Позитив-Благоденствие",
    )
    story = [
        Paragraph("ООО «Позитив-Благоденствие»", subtitle),
        Spacer(1, 14 * mm),
        Paragraph(str(document["title"]), title),
        Paragraph(str(document["subtitle"]), subtitle),
        Spacer(1, 17 * mm),
        Table(
            [[Paragraph(str(document["number"]), body)]],
            colWidths=[150 * mm],
            style=TableStyle([
                ("BOX", (0, 0), (-1, -1), 0.8, HexColor("#D9CEBD")),
                ("BACKGROUND", (0, 0), (-1, -1), HexColor("#F8F4EA")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 7 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7 * mm),
            ]),
        ),
        Spacer(1, 14 * mm),
    ]
    for paragraph in document["body"]:
        story.append(Paragraph(str(paragraph), body))
    story.extend([
        Spacer(1, 30 * mm),
        Paragraph("Демонстрационная версия — будет заменена оригиналом", subtitle),
    ])
    doc.build(story)
    copy2(path, PUBLIC_DIR / path.name)


for item in DOCUMENTS:
    create_document(item)
