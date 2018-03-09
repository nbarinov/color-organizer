import ColorList from '../../../source/components/ui/ColorList';

const { mount } = Enzyme;

jest.mock('../../../source/components/ui/Color');

describe("<ColorList /> UI Component", () => {
    describe("Rating a Color", () => {
        let _rate = jest.fn();

        beforeAll(() =>
            mount(<ColorList colors={_testColors} onRate={_rate} />)
                .find('button.rate')
                .first()
                .simulate('click')
        );

        it("invokes onRate Handler", () =>
            expect(_rate).toBeCalled()
        );

        it("rates the correct color", () =>
            expect(_rate).toBeCalledWith(
                "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                4
            )
        );
    });
});