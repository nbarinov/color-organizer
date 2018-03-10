import AddColorForm from '../../../source/components/ui/AddColorForm';

const { mount, shallow } = Enzyme;

describe("<AddColorFrom /> UI Component", () => {
    let wrapper;

    describe("Rendering for UI", () => {
        it("renders correct properties", () => {
            expect(
                shallow(<AddColorForm />).html()
            ).toMatchSnapshot();
        });

        it("renders parental className add-color-form", () =>
            expect(
                shallow(<AddColorForm className="parent__form" />)
                    .find('form.parent__form.add-color-form')
                    .length
            ).toBe(1)
        );

        it("Submitting default onNewColor does not cause error", () => {
            wrapper = mount(<AddColorForm />);
            wrapper.ref('_title').value = 'test-color';
            wrapper.ref('_color').value = '#0000FF';
            wrapper.find('form').simulate('submit');
        });
    });

    describe("Adding new Colors", () => {
        const _addColor = jest.fn();

        beforeAll(() => {
            wrapper = mount(<AddColorForm onNewColor={_addColor} />);
            wrapper.ref('_title').value = 'test-color';
            wrapper.ref('_color').value = '#000099';
            wrapper.find('form').simulate('submit');
        });

        it("adds colors correctly", () =>
            expect(_addColor).toBeCalledWith('test-color', '#000099')
        );

        it("resets the title value", () =>
            expect(wrapper.ref('_title').value).toBe('')
        );

        it("resets the color value", () =>
            expect(wrapper.ref('_color').value).toBe("#000000")
        );
    });
});