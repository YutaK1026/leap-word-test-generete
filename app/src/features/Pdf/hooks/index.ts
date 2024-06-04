import dynamic from "next/dynamic";
import { StyleSheet } from "@react-pdf/renderer";

export const usePdf = () => {
  const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
      ssr: false,
    }
  );

  return {
    PDFViewer
  }
}

export const usePdfStyle = () => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 11,
      fontFamily: "NotoSansJP",
    },
    header: {
      fontSize: 24,
      marginBottom: 0,
      fontWeight: "bold",
      textAlign: "center",
    },
    details: {
      marginBottom: 30,
    },
    detailItem: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    itemsTable: {
      display: "flex",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableColHeader: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      textAlign: "center",
      borderLeftWidth: 0,
      borderTopWidth: 0,
      fontWeight: "bold",
      padding: 5,
    },
    tableCol: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      textAlign: "center",
      borderLeftWidth: 0,
      borderTopWidth: 0,
      padding: 5,
    },
    textVertical: {
      flexDirection: "column",
    },
    company: {
      marginTop: 10,
    },
  })

  return {
    styles
  }
};
