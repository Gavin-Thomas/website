from playwright.sync_api import Page, expect

def test_color_scheme_and_layout(page: Page):
    # Set a consistent viewport size for screenshots
    page.set_viewport_size({"width": 1280, "height": 800})

    # 1. Verify Projects Page
    page.goto("http://localhost:3000/projects")
    expect(page.get_by_role("heading", name="Projects")).to_be_visible()
    page.screenshot(path="/app/jules-scratch/verification/projects-page-final.png")

    # 2. Verify Research Page
    page.goto("http://localhost:3000/research")
    expect(page.get_by_role("heading", name="Research")).to_be_visible()
    page.screenshot(path="/app/jules-scratch/verification/research-page-final.png")

    # 3. Verify Resources Page
    page.goto("http://localhost:3000/resources")
    expect(page.get_by_role("heading", name="Resources")).to_be_visible()
    page.screenshot(path="/app/jules-scratch/verification/resources-page-final.png")
