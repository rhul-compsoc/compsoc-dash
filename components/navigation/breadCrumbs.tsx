import Link from "next/link";

export interface BreadCrumb {
  href: string;
  name: string;
};

export interface BreadCrumbProps {
  breadCrumbs?: BreadCrumb[];
};

export const BreadCrumbs: React.FC<BreadCrumbProps> = ({ breadCrumbs }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breadCrumbs && breadCrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className="inline-flex items-center"
          >
            <Link
              href={breadcrumb.href}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              {breadcrumb.name}
            </Link>
            {index < breadCrumbs.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
