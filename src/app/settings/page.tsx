import SettingsHero from "../ui/settings/settings-hero"
import SettingsLists from "../ui/settings/SettingsLists"
import SettingsAccordion from "../ui/settings/SettingsAccordion"

const Settings = () => {
    return (
      <div className="bg-[#C7C7C71F]">
        <SettingsHero />
        <SettingsLists />
        <SettingsAccordion />
      </div>
    );
}

export default Settings