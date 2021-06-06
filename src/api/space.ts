import axios from "axios";
import { SERVER_URL } from "@/api/constant";

export type SpaceResponse = {
  group_id: string;
  name: string;
  description: string;
  image_url?: string;
  creation_date: string;
};

export type Space = {
  groupId: string;
  name: string;
  description: string;
  imageUrl?: string;
  creationDate: string;
};

export const fetchSpace = async (groupId: string): Promise<SpaceResponse> => {
  const res = await axios.get(`${SERVER_URL}/group/${groupId}`);
  return res.data;
};
