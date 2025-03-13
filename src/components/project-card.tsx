import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import "./ui/project-card.css"; // Import the CSS file

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  isActive?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  isActive = true,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1"
              >
                <span className="hover:no-underline">{title}</span>

                <h3>
                  <span className={isActive ? "active" : "inactive"}>•</span>
                </h3>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-poppins text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-poppins text-base print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
