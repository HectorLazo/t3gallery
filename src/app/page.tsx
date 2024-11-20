import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/hKNwWAPK2C0rHUxDHdvy1Wgc5k8uLDtIrRhCX7Qob9AvzPjV",
  "https://utfs.io/f/hKNwWAPK2C0rV8KHQMCIl8QM5pAsih6k9JbI4ydWCvqKDxnY",
  "https://utfs.io/f/hKNwWAPK2C0rGTzYn1l1VWcB8In04URiONq53zATZdwheDYa",
  "https://utfs.io/f/hKNwWAPK2C0rtkv3hcp7GWVnuR8ro3bkNAXpZxMfa4jKzD9E"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map(image => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
