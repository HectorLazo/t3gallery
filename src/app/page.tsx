import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

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

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">{post.name}</div>
        ))}  
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
