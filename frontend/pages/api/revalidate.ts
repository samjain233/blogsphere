import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const path: string | null | undefined = req.query.path as string;
  if (path === null || path === undefined) {
    return res.json({ revalidated: false, message: "path not provided" });
  }
  await res.revalidate(path);
  return res.json({ revalidated: true });
}
