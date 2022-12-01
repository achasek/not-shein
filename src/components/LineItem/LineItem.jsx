export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div>
            <div>
                <span>{lineItem.item.name}</span>
                <span>{`${lineItem.item.waterPrice} gallons of water`}</span>
                <span>{`${lineItem.item.carbonPrice} kilograms of carbon emissions`}</span>
            </div>
            <div>{lineItem.extWaterPrice} gallons of water</div>
            <div>{lineItem.extCarbonPrice} kilograms of carbon emissions</div>
            <div>
                {!isPaid &&
                    <button
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                    >−</button>
                }
            <span>{lineItem.qty}</span>
                {!isPaid &&
                    <button
                        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                    >+</button>
                }
            </div>
        </div>
    )
}