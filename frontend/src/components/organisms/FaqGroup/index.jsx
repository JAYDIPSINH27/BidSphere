import styles from './FaqGroup.module.scss';
import Accordian from '../../atoms/accordian';

function FaqGroup({ faqs }) {
  return (
    <div className="grid grid-cols-1 gap-8 mt-12">
      {faqs.map((category, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-lg font-bold text-bslightblue">{category.category}</h2>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {category.items.map((item, itemIndex) => (
              <Accordian title={item.question} body={item.answer} index={`${index}a${itemIndex}`}></Accordian>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqGroup;
