const ColorMock = ({ rating, onRate = f => f }) => (
    <div className="mock-color">
        <button className="rate" onClick={() => onRate(rating)} />
    </div>
);

ColorMock.displayName = 'ColorMock';

export default ColorMock;