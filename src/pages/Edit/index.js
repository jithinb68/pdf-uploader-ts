import PageHeader from "../../components/PageHeader";
import PdfViewerComponent from "../../components/PdfViewerComponent";

function Edit() {
  return (
    <div className="Edit">
      <div className="page-header">
        <PageHeader />
      </div>
      <div className="PDF-viewer">
        <PdfViewerComponent document={"SampleJobOfferLetter.pdf"} />
      </div>
    </div>
  );
}

export default Edit;
