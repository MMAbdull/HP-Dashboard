export default function NewsCard({ articles }) {
  const {
    title,
    description,
    urlToImage,
    source,
    publishedAt,
    url
  } = articles;

  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#111",
        color: "#fff"
      }}
    >

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "relative",
          width: "30%",
          minHeight: "180px",
          textDecoration: "none",
          color: "white"
        }}
      >
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ margin: "5px 0 0", fontSize: "14px" }}>
            {description?.slice(0, 80)}...
          </p>
        </div>
      </a>

      <div
        style={{
          width: "70%",
          padding: "20px",
          background: "#030712"
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Source:</strong> {source?.name}
        </p>

        <p style={{ margin: "10px 0" }}>
          <strong>Published:</strong>{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#aadd00",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Read Full Articles →
        </a>
      </div>
    </div>
  );
}