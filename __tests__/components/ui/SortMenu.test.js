import SortMenu from '../../../source/components/ui/SortMenu';

const { mount, shallow } = Enzyme;

describe("<SortMenu /> UI Component", () => {
    let wrapper;

    describe("Rendering for UI", () => {
        beforeAll(() => wrapper = mount(<SortMenu sort="SORTED_BY_TITLE" />));

        it("Renders Correctly", () => {
            expect(
                shallow(<SortMenu sort="SORTED_BY_TITLE" />).html()
            ).toMatchSnapshot()
        });

        it("renders parental className stars", () =>
            expect(
                shallow(<SortMenu className="parant__sort-menu" />)
                    .find('nav.parant__sort-menu.sort-menu')
                    .length
            ).toBe(1)
        );
    });

    describe("Changing the Sort", () => {
        it("click does not cause error", () => {
            mount(<SortMenu sort="SORTED_BY_TITLE" />)
                .children()
                .childAt(2)
                .simulate('click');
        });

        it("onSelect returns correct option", () => {
            const _select = jest.fn();
            const wrapper = mount(<SortMenu onSelect={_select} />);

            wrapper.children().childAt(3).simulate('click');

            expect(_select.mock.calls[0][0]).toBe("rating");
        });
    });
})