export default function LineItem({ lineItem, isPaid }) {
    return (
        <div>
            <div>
                <span>{lineItem.item.name}</span>
                <span>{lineItem.item.waterPrice}</span>
                <span>{lineItem.item.carbonPrice}</span>
            </div>
            <div>{lineItem.extWaterPrice}</div>
            <div>{lineItem.extCarbonPrice}</div>
        </div>
    )
}