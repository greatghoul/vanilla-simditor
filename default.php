// Define the plugin:
$PluginInfo['Simditor'] = array(
   'Description' => 'an simple online editor - Simditor. https://github.com/mycolorway/simditor',
   'Version' => '1.0',
   'PluginUrl'   => 'https://github.com/greatghoul/vanilla-simditor',
   'Author' => "greatghoul",
   'AuthorEmail' => 'greatghoul@gmail.com',
   'AuthorUrl' => 'https://github.com/greatghoul'
);

class EpicEditorPlugin extends Gdn_Plugin
{
    public function Gdn_Form_beforeBodyBox_handler($sender)
    {
        // Make sure that Markdown is used
        // $sender->setValue('Format', 'Markdown');
        // Remove jQuery Autogrow as it interferes with the editor
        // Gdn::controller()->removeJsFile('jquery.autogrow.js');
        // Add the assets we need for the editor
        Gdn::controller()->addJsFile($this->getResource('js/editor.min.js', false, false));
    }
}