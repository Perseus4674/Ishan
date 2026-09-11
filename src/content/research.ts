export const research = {
  heading: "early warning from intensive-care records",
  status: "unpublished",
  blurb:
    "Transformer architectures on irregular, heavily missing clinical time-series. The interesting problem isn't the model — the standard preprocessing conveniences leak information from the future into the past, and most published results are inflated by some version of that.",
  points: [
    "strict temporal validation, no imputation drawing on data after the prediction point",
    "architecture and preprocessing decisions documented for reproduction, not just for the headline number",
  ],
  stack: ["PyTorch", "MIMIC-IV", "temporal fusion architectures", "pytest"],
  closing: "methodology and current results available on request.",
};
