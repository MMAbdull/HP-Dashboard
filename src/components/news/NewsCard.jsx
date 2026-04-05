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
    <div className="flex flex-col md:flex-row m-5 rounded-xl overflow-hidden bg-[#111] text-white">

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full md:w-[30%] min-h-50 md:min-h-45"
      >
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
          <h3 className="m-0 text-[clamp(14px,2vw,20px)] font-semibold leading-[1.3] line-clamp-2">
            {title}
          </h3>

          <p className="mt-1 text-xs opacity-80 line-clamp-2 md:line-clamp-none">
            {description}
          </p>
        </div>
      </a>

      <div className="w-full md:w-[70%] p-4 md:p-5 bg-gray-950">
        <p className="m-0">
          <strong>Source:</strong> {source?.name}
        </p>

        <p className="my-2">
          <strong>Published:</strong>{" "}
          {new Date(publishedAt).toLocaleDateString()}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#aadd00] font-bold no-underline"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
}