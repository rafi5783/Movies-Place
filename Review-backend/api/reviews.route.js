import express from "express";
import ReviewsController from "./reviews.controller.js";

const router = express.Router();

router.route("/movie/:id").get(ReviewsController.apiGetReview);
router.route("/new").post(ReviewsController.apiPostReview);
router.route("/:id")
    .get(ReviewsController.apiGetReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview);

export default router;
