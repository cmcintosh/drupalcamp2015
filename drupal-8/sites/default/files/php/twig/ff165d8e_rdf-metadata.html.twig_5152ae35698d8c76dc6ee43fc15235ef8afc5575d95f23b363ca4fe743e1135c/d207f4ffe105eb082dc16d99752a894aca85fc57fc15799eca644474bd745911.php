<?php

/* core/themes/classy/templates/misc/rdf-metadata.html.twig */
class __TwigTemplate_9ad230b48023057293c7fe439a1691ef3c1b050e15dae53ba9fe2def5d5bb68a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 18
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["metadata"]) ? $context["metadata"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["attributes"]) {
            // line 19
            echo "  <span";
            echo $this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["attributes"], "addClass", array(0 => "rdf-meta", 1 => "hidden"), "method"), "html", null, true);
            echo "></span>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['attributes'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "core/themes/classy/templates/misc/rdf-metadata.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  23 => 19,  19 => 18,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Theme override for empty spans with RDF attributes.*/
/*  **/
/*  * The XHTML+RDFa doctype allows either <span></span> or <span /> syntax to*/
/*  * be used, but for maximum browser compatibility, W3C recommends the*/
/*  * former when serving pages using the text/html media type, see*/
/*  * http://www.w3.org/TR/xhtml1/#C_3.*/
/*  **/
/*  * Available variables:*/
/*  * - metadata: Each item within corresponds to its own set of attributes,*/
/*  *   and therefore, needs its own 'attributes' element.*/
/*  **/
/*  * @see template_preprocess_rdf_metadata()*/
/*  *//* */
/* #}*/
/* {% for attributes in metadata %}*/
/*   <span{{ attributes.addClass('rdf-meta', 'hidden') }}></span>*/
/* {% endfor %}*/
/* */
