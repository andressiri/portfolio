const getBrowser = () => {
  if (typeof window === "undefined") return;

  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) !== -1
  )
    return "Opera";
  if (navigator.userAgent.indexOf("Edg") !== -1) return "Edge";
  if (navigator.userAgent.indexOf("Chrome") !== -1) return "Chrome";
  if (navigator.userAgent.indexOf("Safari") !== -1) return "Safari";
  if (navigator.userAgent.indexOf("Firefox") !== -1) return "Firefox";
  if (navigator.userAgent.indexOf("MSIE") !== -1) return "IE";
  return "unknown";
};

export default getBrowser;
