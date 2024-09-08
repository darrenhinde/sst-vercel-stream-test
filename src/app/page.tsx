import { Link } from "@/components/link";

export default function Page() {
  return (
    <main className="space-y-4">
      <h1 className="text-xl font-semibold">Vercel AI SDK Fundamentals</h1>
      <p>
       Simple examples of vercel AI SDK
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/examples/generate-text">Generate Text</Link>
        </li>
        <li>
          <Link href="/examples/stream-text">Stream Text</Link>
        </li>
        <li>
          <Link href="/examples/generate-object">Generate Object</Link>
        </li>
        <li>
          <Link href="/examples/stream-object">Stream Object</Link>
        </li>
        <li>
          <Link href="/examples/tools/basic">Basic Tool</Link>
        </li>
        <li>
          <Link href="/examples/basic-chatbot">Chatbot with `useChat`</Link>
        </li>
        <li>
          <Link href="/examples/generate-ui-streamui">Generate UI</Link>
        </li>
        <li>
          <Link href="/examples/multi-modal">Multi Modal</Link>
        </li>
        <li>
          <Link href="/examples/ui-generate-streamfastapi">enerate Fast API</Link>
        </li>
        <li>
          <Link href="/chat-rsc">RSC CHAT</Link>
        </li>
      </ul>
    </main>
  );
}
