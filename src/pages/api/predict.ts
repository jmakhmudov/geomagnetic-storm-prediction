import axios from "axios";

export default async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const jsonData = await axios.get(
      "https://us-central1-geomag-ml-api.cloudfunctions.net/predictWithTF"
    ).then((response) => response.data);
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};