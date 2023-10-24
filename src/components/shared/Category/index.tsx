
const Category = ({ options, level = 0 }: any) => {
  return (
    <>
      {options?.map((item: Record<string, any>, index: number) => {
       return (
				<div style={{ marginLeft: `10px` }} key={index}>
					<div>
						{level > 0 && item.children?.[0] && <button>(0)</button>}
						<h3>{item.title}</h3>
					</div>
					{item.children && <Category options={item.children} level={level + 1} />}
				</div>
			);
      })}
    </>
  );
};

export default Category;