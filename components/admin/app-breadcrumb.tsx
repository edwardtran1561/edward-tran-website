import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const AppBreadcrumb: React.FC = () => {
  const pathnames = usePathname();
  const segments = pathnames.split("/").filter(Boolean);

  const formatLabel = (segment: string) => {
    const decoded = decodeURIComponent(segment);

    return decoded.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const breadcrumbs = segments.map((segment) => formatLabel(segment));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <Fragment key={`Data-item${index}`}>
            <BreadcrumbItem className="hidden md:block">
              <span>{item}</span>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
