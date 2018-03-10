import Star from '../../../source/components/ui/Star';

const { shallow } = Enzyme;

describe("<Star /> UI Component", () => {
    it("renders default star", () =>
        expect(
            shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1)
    );

    it("renders parental className stars", () =>
        expect(
            shallow(<Star className="parent__star" />)
                .find('div.parent__star.star')
                .length
        ).toBe(1)
    );

    it("renders selected stars", () =>
        expect(
            shallow(<Star selected={true} />)
                .find('div.star.star--selected')
                .length
        ).toBe(1)
    );

    it("invokes onClick", () => {
        const _click = jest.fn();

        shallow(<Star onClick={_click} />)
            .find('div.star')
            .simulate('click');

        expect(_click).toBeCalled();
    });

    it("Clicking default button does not cause Error", () => {
        shallow(<Star />)
            .find('div.star')
            .simulate('click')
    });
});