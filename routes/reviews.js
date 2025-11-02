const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapacync");
const { isLoggedIn, isReviewAuthor, validateReview } = require("../middleware");
const reviewController = require("../controllers/reviews");


// post review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Destroy Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;