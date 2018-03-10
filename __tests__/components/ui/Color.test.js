import Color from '../../../source/components/ui/Color';

const { mount, shallow } = Enzyme;

describe("<Color /> UI Component", () => {
    describe("Rendering for UI", () => {
        it("Renders correct properties", () => {
            let output = shallow(
                <Color title="Test Color"
                    color="#f0f0f0"
                    rating={3}
                    timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)" />
            ).html();

            expect(output).toMatchSnapshot();
        });

        it("renders parental className color", () =>
            expect(
                shallow(
                    <Color title="Test Color"
                        color="#f0f0f0"
                        rating={3}
                        timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)"
                        className="parent__color" />
                )
                    .find('section.parent__color.color')
                    .length
            ).toBe(1)
        );
    });

    describe("Functions", () => {
        it("Invokes onRate property", () => {
            mount(<Color title="Test Color" color="#F0F0F0" timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)" />)
                .find('div.star-rating__stars')
                .childAt(2)
                .simulate('click')
        })

        it("Invokes onRate property", () => {
            mount(<Color title="Test Color" color="#F0F0F0" timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)" />)
                .find("button")
                .simulate('click')
        })
    });
});