"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  // 새 탭으로 이동하는 동안에도 요청이 끊기지 않도록 sendBeacon 사용
  const recordClick = () => {
    navigator.sendBeacon(`/api/clicks/${link.id}`);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
    >
      {link.emoji && (
        <span aria-hidden className="text-xl leading-none">
          {link.emoji}
        </span>
      )}
      <span>{link.title}</span>
    </a>
  );
}
