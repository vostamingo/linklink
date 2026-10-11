import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.image ? (
        <Image
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className="size-28 rounded-full object-cover shadow-md ring-4 ring-white"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-28 items-center justify-center rounded-full bg-sky-500 text-4xl font-bold text-white shadow-md ring-4 ring-white"
        >
          {profile.name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold text-slate-800">{profile.name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{profile.bio}</p>
    </header>
  );
}
