import { Router } from "express";
import {
  getCryptoCharts,
  getCryptoDetails,
  getCryptoList,
} from "../controllers/crypto.controllers";

const router = Router();

router.get("/", getCryptoList);

router.get("/:id", getCryptoDetails);

router.get("/:id/chart", getCryptoCharts);

export default router;
