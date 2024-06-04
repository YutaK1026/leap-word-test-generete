import { Page, Text, View, Document, Font } from "@react-pdf/renderer";
import { usePdfStyle } from "../hooks";
import { testData } from "../hooks/data";

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "/fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "/fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

export default function PdfComponent() {
  const { styles } = usePdfStyle()

  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View>
          <Text style={styles.header}>領収書</Text>
        </View>
        <View style={styles.details}>
          {testData.map((detail, index) => (
            <View style={styles.detailItem} key={index}>
              <View style={styles.textVertical}>
                <Text>株式会社〇〇</Text>
                <Text>〇〇 御中</Text>
              </View>
              <View>
                <Text>発行日{detail.value}</Text>
                <View style={styles.company}>
                  <Text>株式会社〇〇</Text>
                  <Text>東京都〇〇〇〇〇〇〇〇〇〇</Text>
                  <Text>TEL：00-0000-0000</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View>
          <View style={styles.itemsTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>概要</Text>
              <Text style={styles.tableColHeader}>数量</Text>
              <Text style={styles.tableColHeader}>単位</Text>
              <Text style={styles.tableColHeader}>単価</Text>
              <Text style={styles.tableColHeader}>金額</Text>
            </View>
            {testData[0].items.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{item.name}</Text>
                <Text style={styles.tableCol}>{item.surface}</Text>
                <Text style={styles.tableCol}>{item.thickness}</Text>
                <Text style={styles.tableCol}>{item.width}</Text>
                <Text style={styles.tableCol}>{item.length}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}