import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  icon: React.ReactNode;
  text: string;
  href: string;
  segment: null | string;
}

export default function Item({ icon, text, href, segment }: Props) {
  const layoutSegment = useSelectedLayoutSegment();
  return (
    <div className="mx-3 my-1">
      <Link href={href}>
        <div
          className={`relative py-2 ${
            layoutSegment === segment ? 'bg-sky-100' : 'hover:bg-slate-100'
          }  block rounded-md ${layoutSegment === segment && 'text-blue-500'}`}
        >
          <div className="text-base absolute left-3 top-0 bottom-0 flex items-center justify-center">{icon}</div>
          <div className="ml-10">
            <div className="text-sm">{text}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
