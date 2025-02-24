import { Request, Response } from "express";
import axios from "axios";

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

export const getCryptoList = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error getting data from crypto page", error);
    res.status(500).json({ message: "Failed getting crypto data" });
  }
};

export const getCryptoDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${COINGECKO_API_URL}/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        devloper_data: false,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error gettng data drom crypot page", error);
    res.status(500).json({ message: "Failed getting crypto data" });
  }
};
