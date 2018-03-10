const ColorMock = ({ rating, onRate = f => f, onRemove = f => f }) => (
    <div className="mock-color">
        <button className="rate" onClick={() => onRate(rating)} />
        <button className="remove" onClick={onRemove} />
    </div>
);

ColorMock.displayName = 'ColorMock';

export default ColorMock;