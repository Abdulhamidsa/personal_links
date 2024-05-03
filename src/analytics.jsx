export const GA_TRACKING_ID = "G-5DLK4G7HBH";
export const initGA = () => {
  if (process.env.NODE_ENV === "production") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("jsx", new Date());
    gtag("config", GA_TRACKING_ID);
  }
};
