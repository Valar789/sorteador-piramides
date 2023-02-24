import ExcelUploader from "./components/home/ExcelUploader";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div className="grid place-content-center">
        <ExcelUploader />
      </div>
    </Layout>
  );
}

export default App;
