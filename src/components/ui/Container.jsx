export default function Container({
  as: Tag = "div",
  className = "",
  children,
}) {
  return <Tag className={className}>{children}</Tag>;
}
