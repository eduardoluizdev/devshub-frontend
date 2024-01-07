type PageHeaderProps = {
  title: string
  subtitle: string
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl text-secondary-foreground lg:mb-2 mb-1">
        {title}
      </h1>
      <h2 className="text-sm lg:text-base ext-secondary-foreground/40">
        {subtitle}
      </h2>
    </div>
  )
}

export { PageHeader }
