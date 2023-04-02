type Props = {
    title: string;
    children: React.ReactNode;
    classname?: string;
};


const ListView = ({title, children, classname}: Props) => {
  return (
    <section className={`${classname} py-8`}>
        <div className="container">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {children}
            </div>
        </div>
    </section>
  )
}

export default ListView
