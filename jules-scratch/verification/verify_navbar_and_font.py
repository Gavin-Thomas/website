from playwright.sync_api import Page, expect

def test_color_scheme_and_layout(page: Page):
    # Set a consistent viewport size for screenshots
    page.set_viewport_size({"width": 1280, "height": 800})

    # 1. Verify Navbar and Projects Page
    page.goto("http://localhost:3000/projects")
    expect(page.get_by_role("heading", name="Projects")).to_be_visible()
    # Check for correct navbar links
    expect(page.get_by_role("link", name="Projects")).to_be_visible()
    expect(page.get_by_role("link", name="Research")).to_be_visible()
    expect(page.get_by_role("link", name="Resources")).to_be_visible()
    expect(page.get_by_role("link", name="CV")).to_be_visible()
    # Check that other links are not present
    expect(page.get_by_role("link", name="Home")).not_to_be_visible()
    expect(page.get_by_role("link", name="Hobbies")).not_to_be_visible()
    expect(page.get_by_role("link", name="Education")).not_to_be_visible()
    page.screenshot(path="jules-scratch/verification/projects-page-updated.png")

    # 2. Verify Research Page
    page.goto("http://localhost:3000/research")
    expect(page.get_by_role("heading", name="Research")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/research-page-updated.png")

    # 3. Verify Resources Page
    page.goto("http://localhost:3000/resources")
    expect(page.get_by_role("heading", name="Resources")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/resources-page-updated.png")
